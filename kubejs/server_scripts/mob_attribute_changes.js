// Elder Guardian como jefe real
const ELDER_VIDA = 400          // vanilla: 80
const ELDER_DEBUG = true

EntityEvents.spawned(event => {
    const e = event.entity
    if (String(e.type) != 'minecraft:elder_guardian') {
        // No es un Elder Guardian
    } else {
        if (e.maxHealth >= ELDER_VIDA) {
            // Ya fue mejorado (carga de chunk o reinicio): no se vuelve a curar
        } else {
            event.server.runCommandSilent('attribute ' + e.uuid + ' minecraft:generic.max_health base set ' + ELDER_VIDA)
            // Curar hasta el nuevo máximo: instant_health nivel 50 cura de sobra
            event.server.runCommandSilent('effect give ' + e.uuid + ' minecraft:instant_health 1 50 true')
            if (ELDER_DEBUG) { console.log('[ELDER] max=' + e.maxHealth + ' vida=' + e.health) }
        }
    }
})

// Creaking (Vanilla Backport) más peligroso: más daño y parte de su golpe ignora la armadura.
// ---------- CONFIGURACIÓN ----------
const CR_ID = 'vanillabackport:creaking'
const CR_DANO = 6.0            // daño base: 6 = 3 corazones (original: 3.0 = 1.5 corazones)
const CR_IGNORA_ARMADURA = 0.4       // 0.4 = devuelve el 40% de lo que la armadura le quitó al golpe
const CR_IGNORA_ENCANTAMIENTOS = 0.5 // 0.5 = devuelve el 50% de lo que quitaron Protección y similares
// -----------------------------------

const CR_Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
const CR_Reduction = Java.loadClass('net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction')

// 1) Daño: se fija el valor base al aparecer (también al cargarse de nuevo el chunk)
EntityEvents.spawned(CR_ID, event => {
    let creaking = event.entity
    if (!creaking) {
        // nada que modificar
    } else {
        let atributo = creaking.getAttribute(CR_Attributes.ATTACK_DAMAGE)
        if (!atributo) {
            console.error('[CreakingBuff] el Creaking no tiene atributo de daño')
        } else {
            if (atributo.getBaseValue() == CR_DANO) {
                // ya estaba ajustado
            } else {
                atributo.setBaseValue(CR_DANO)
            }
        }
    }
})

// Devuelve una fracción de lo que redujo una protección concreta (armadura, encantamientos...)
function crDevolver(contenedor, tipo, fraccion) {
    let extra = 0
    if (!(fraccion > 0)) {
        extra = 0
    } else {
        let reducido = contenedor.getReduction(tipo)
        if (!(reducido > 0)) {
            extra = 0
        } else {
            extra = reducido * Math.min(fraccion, 1)
        }
    }
    return extra
}

// 2) Penetración: después de que armadura y encantamientos actúan, se devuelve una parte
//    de lo que redujeron. Todo va dentro de try/catch para no volver a romper la entidad.
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre', event => {
    try {
        let contenedor = event.getContainer()
        if (!contenedor) {
            // sin datos de daño
        } else {
            // En KubeJS, DamageSource.getEntity() se llama getActual()
            let atacante = contenedor.getSource().getActual()
            if (!atacante) {
                // daño sin atacante
            } else {
                if (String(atacante.type) != CR_ID) {
                    // no es un Creaking
                } else {
                    let extra = crDevolver(contenedor, CR_Reduction.ARMOR, CR_IGNORA_ARMADURA)
                        + crDevolver(contenedor, CR_Reduction.ENCHANTMENTS, CR_IGNORA_ENCANTAMIENTOS)
                    if (!(extra > 0)) {
                        // no hubo nada que devolver
                    } else {
                        contenedor.setNewDamage(contenedor.getNewDamage() + extra)
                    }
                }
            }
        }
    } catch (e) {
        console.error('[CreakingBuff] error en la penetración de armadura: ' + e)
    }
})
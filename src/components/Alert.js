import React from 'react'

export default function Alert(prop) {
    function capitalise (word){
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        prop.alert && <div class={`alert alert-${prop.alert.type} alert-dismissible fade show `} role="alert">
            <strong>{capitalise(prop.alert.type)}</strong> : {prop.alert.msg}
            
        </div>
    )
}

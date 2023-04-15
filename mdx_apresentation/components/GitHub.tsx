import React from 'react'

export function GitHub() {
    function getData() {
        fetch('https://api.github.com/repos/KevinDik/kevindik')
            .then(resp => resp.json())
            .then(data => {
                const kevinObj = {
                    nome: data.name,
                    avatar: data.owner.avatar_url,
                    primeiro_Login: data.created_at,
                    link: data.html_url,
                }
                return kevinObj;
            })
    }


    return (
        <div>
            <p>ok</p>
        </div>
    )
}

import React from 'react'

export default function PokemonTable(props) {
  return (
    <div className='m-5'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Pokemon Name</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                { props.pokemons.map( (pokemon) => {
                    return (
                        <tr key={pokemon.name}>
                            <td>{pokemon.name}</td>
                            <td>
                                <img src={pokemon.imageUrl} alt={pokemon.name}></img>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

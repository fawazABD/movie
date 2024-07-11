import { Link } from "react-router-dom";
import './Players.css';
import { useState } from "react";
import { useEffect } from "react";


const Players = ({ setDarkMode, darkMode }) => {
  const players = [
    {
      image_url:
        "https://assets.goal.com/images/v3/bltac4d69ea6d858d2d/GettyImages-1429738911.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      name: "Debryune",
      position: "Forward",
      team: "Barcelona",
      country: "Argentina",
      height: "1.78m",
      weight: "75kg",
      age: "29",
      nationality: "Argentina",
    },
    {
      image_url:
        "https://wallpapers.com/images/hd/messi-pictures-jzykf84saw6wbkd6.jpg",
      name: "Messi",
      position: "Forward",
      team: "Real Madrid",
      country: "Germany",
      height: "1.99m",
      height: "1.78m",
      weight: "75kg",
      age: "80",
      nationality: "france"
    },
    {
      image_url:
        "https://assets.goal.com/images/v3/bltac4d69ea6d858d2d/GettyImages-1429738911.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      name: "Ronaldo",
      position: "Forward",
      team: "Real Madrid",
      country: "Portugal",
      height: "1.88m",
      height: "1.78m",
      weight: "55kg",
      age: "50",
      nationality: "Belgium"
    },
    {
      image_url:
        "https://wallpapers.com/images/hd/messi-pictures-jzykf84saw6wbkd6.jpg",
      name: "Maradona",
      position: "Forward",
      team: "Paris Saint-Germain",
      country: "Brazil",
      height: "1.88m",
      height: "1.78m",
      weight: "45kg",
      age: "60",
      nationality: "Croatia"
    },
  ];
  
  return (
    <div className={`players_wrapper`}>
        {players.map((player) => {
          return (
                <div className="players_display">
                    <img src={player.image_url}/>
                    <div className="player_bac font-bold p-5 bg-yellow text-white rounded-md">
                        <h3 className="pname">Name: {player.name}</h3>
                        <h3 className="pposition">Position: {player.position}</h3>
                        <h3 className="pteam">Team: {player.team}</h3>
                        <h3 className="pcountry">Country: {player.country}</h3>
                        <h3 className="pheight">Height: {player.height}</h3>
                        <h3 className="pweight font-bold">Weight: {player.weight}</h3>
                        <h3 className="p_age  font-sans font-bold">Age: {player.age}</h3>
                        <h3 className="pnationality">Nationality: {player.nationality}</h3>
                    </div>
                </div>
          );
        })}
        <div className="border rounded-lg p-4 mx-auto">
            <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Set to Light' : 'Set to Dark'}</button>
        </div>
    </div>
  ) 
};

export default Players;

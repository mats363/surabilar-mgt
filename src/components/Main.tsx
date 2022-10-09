import founderImage from "../images/2022-09-15.png"
import spelkort from "../images/Kort-klara.png"


export function Main() {
    return (<>
    <section className="w-screen bg-black flex justify-start items-start p-4">
        <article className="m-4 p-4 text-wind text-Magic_5 text-center tablet:text-left">
            <p>
                New to Magic The Gathering? 
                <br/>
                Press Get started to learn how to play and dive in to the world of card games.
                <br/><br/>
                Want to play with others?
                Press Gathering to get locations and events.  
            </p>
      
        </article>
        
    </section>

    <section className="w-screen bg-black flex flex-col justify-start items-start p-4 text-wind">
        <article className="p-4">
            <h2 className="text-wind text-Magic_3">History of MTG</h2>
            <p className="text-wind text-Magic_7">
                Somewhere in the early 90s, back when the game was still on the drawing board, creator Richard Garfield wanted to design a Dungeons & Dragons-style game where players are wizards in a fantastical world, but he also wanted the games to be quick and never require anything more than a deck of cards. That’s why the first-ever set, now known as Alpha, was made.
                Back then, the cards didn’t need to be anything more than 
                generic monsters and vague magical artifacts for the game to work. But Garfield left just the hint of a larger world and an epic story, and thus gave birth to one of gaming’s most beloved universes. A multiverse, actually. 
            </p>
            <img src={founderImage} className="h-44 w-44 rounded-full"/>
        </article>

        <article>
            <h2 className="text-Magic_3">Planeswalkers</h2>
            <p className="text-Magic_7">
                Planeswalkers are among the most powerful beings in the multiverse. Within the game, they represent the thematic identities of the players. Planeswalker is also a card type within the game.
                Planeswalker card types were introduced in Lorwyn. Like the player, a planeswalker card represents a powerful being that is able to move from plane to plane. Planeswalkers borrowed their "attack me to lower my loyalty" mechanic from something called structures that Richard Garfield made for Ravnica: City of Guilds, but never had been used. 
                An earlier design for planeswalkers, meant to be introduced in Future Sight would later inspire the design of Sagas.
            </p>
            <img src={spelkort} className="w-96"/>
        </article>
            <h2 className="text-Magic_3">Colors of mana</h2>
            <p className="text-Magic_7">
            It is drawn from the plains and embodies the principles of morality and order. The mana symbol for White is represented by a sun. On the color pie, it is allied with green and blue, and is enemies with black and red. White seeks peace through structure.
            </p>
        <article>
            
        </article>
    </section>
    </>)
}
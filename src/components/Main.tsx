import founderImage from "../images/2022-09-15.png"
import spelkort from "../images/Kort-klara.png"
import plainsImg from "../images/Plains.png"
import fireImg from "../images/Fire.png"
import waterImg from "../images/Water.png"
import swampImg from "../images/Swamp.png"
import forestImg from "../images/Forest.png"



export function Main() {
    return (<main className="bg-black">
    <section className="w-screen flex justify-start items-start px-4 mx-8 bg-black">
        <article className="text-wind text-Magic_5 text-center tablet:text-left tablet:hidden">
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

    <section className="max-w-screen flex flex-col justify-start items-start text-wind mx-4 px-4">

        <article className="flex flex-col tablet:flex-row mx-16">  
            <div className="flex-auto w-11/12">
                <h2 className="text-wind text-Magic_2 text-left">History of MTG</h2>
                <br/>
                <p className="text-wind text-Magic_7 text-left">
                    Somewhere in the early 90s, back when the game was still on the drawing board, creator Richard Garfield wanted to design a Dungeons & Dragons-style game where players are wizards in a fantastical world, but he also wanted the games to be quick and never require anything more than a deck of cards. That’s why the first-ever set, now known as Alpha, was made.
                    Back then, the cards didn’t need to be anything more than 
                    generic monsters and vague magical artifacts for the game to work. But Garfield left just the hint of a larger world and an epic story, and thus gave birth to one of gaming’s most beloved universes. A multiverse, actually. 
                </p>
            </div>
            <figure>
                <img src={founderImage} className="w-[300px] rounded-full"/>
            </figure>
        </article>
        
        <article className="mx-4 px-4 py-4 flex justify-center flex-col tablet:flex-row-reverse">
            <div>
                <h2 className="text-Magic_2 text-left">Planeswalkers</h2>
                <br/>
                <p className="text-Magic_7 text-left">
                    Planeswalkers are among the most powerful beings in the multiverse. Within the game, they represent the thematic identities of the players. Planeswalker is also a card type within the game.
                    Planeswalker card types were introduced in Lorwyn. Like the player, a planeswalker card represents a powerful being that is able to move from plane to plane. Planeswalkers borrowed their "attack me to lower my loyalty" mechanic from something called structures that Richard Garfield made for Ravnica: City of Guilds, but never had been used. 
                    An earlier design for planeswalkers, meant to be introduced in Future Sight would later inspire the design of Sagas.
                </p>
            </div>
            <figure className="">
                <img src={spelkort} className="min-w-80 min-h-80"/>
            </figure>
        </article>

        <section id="colorsOfMana" className="flex-col space-y-10 bg-black mx-4 px-4">
            <h2 className="text-Magic_2 text-center tablet:text-left">Colors of mana</h2>
        
            <article className="flex justify-center flex-col tablet:justify-evenly tablet:flex-row">
                <figure className="flex justify-center p-4">
                    <img src= {plainsImg} className="w-[75px] h-[75px] min-w-[75px]"/>
                </figure>
                <p className="text-Magic_7 text-left m-auto">
                    It is drawn from the plains and embodies the principles of morality and order. The mana symbol for White is represented by a sun. On the color pie, it is allied with green and blue, and is enemies with black and red. White seeks peace through structure.
                </p> 
            </article>
            <article className="flex justify-center flex-col tablet:justify-evenly tablet:flex-row">
                <figure className="flex justify-center p-4">
                    <img src= {fireImg} className="w-[75px] h-[75px] min-w-[75px]"/>
                </figure>
                <p className="text-Magic_7 text-left  m-auto">
                    It is drawn from the mountains and embodies the principles of impulse and chaos. The mana symbol for Red is represented by a fireball. On the color pie, it is allied with black and green, and is enemies with white and blue. Red seeks freedom through action.            
                    </p>
            </article>
            <article className="flex justify-center flex-col tablet:justify-evenly tablet:flex-row">
                <figure className="flex justify-center p-4">
                    <img src= {waterImg} className="w-[75px] h-[75px] min-w-[75px]"/>
                </figure>
                <p className="text-Magic_7 text-left m-auto">
                    It is drawn from islands and embodies the concepts of logic and technology and seeks perfection through knowledge. The mana symbol for Blue is a drop of water. On the color pie, it is allied with white and black and is the enemy of red and green. For a time, Blue was the dominant color and R&D was forced to change its approach to the color in order to bring it in line with the strength of the other colors.        
                </p>    
            </article>
            <article className="flex justify-center flex-col tablet:justify-evenly tablet:flex-row">
                <figure className="flex justify-center p-4">
                    <img src= {swampImg} className="w-[75px] h-[75px] min-w-[75px]"/>
                </figure>
                <p className="text-Magic_7 text-left m-auto">
                    It is drawn from the power of swamps and embodies the principles of parasitism and amorality (though not necessarily immorality). The mana symbol for Black is represented by a skull. On the color pie, it is the ally of blue and red, and the enemy of white and green. Black seeks power through ruthlessness or opportunity.                </p>
            </article>
            <article className="flex justify-center flex-col tablet:justify-evenly tablet:flex-row">
                <figure className="flex justify-center p-4">
                    <img src= {forestImg} className="w-[75px] h-[75px] min-w-[75px]"/>
                </figure>    
                <p className="text-Magic_7 text-left m-auto">
                    It is drawn from the power of forests and embodies the principles of instinct and interdependence. The mana symbol for Green is represented by a tree. On the Color Pie, it is the ally of white and red, and the enemy of blue and black. Green seeks growth through acceptance, though it has also previously been described as seeking harmony or acceptance through growth, or growth through wisdom.                </p>
            </article>
        </section>
        <div className="flex flex-col mx-16 mb-32 mt-16 space-y-3">
            <h3 className="text-Magic_4 text-wind text-left">Keep up to date? Join our newsletter</h3>
            <div>
                <input className="w-96"></input>
                <button className="bg-blue">Send</button>
            </div>
        </div>
    </section>
    </main>)
}
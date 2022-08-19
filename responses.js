function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "bye") {
        return "Talk to you later!";
    }
    else if (input == "i'm scared") {
        let t1="Listen to this->What makes you beautitiful-One Direction"
       return t1.link("C:/Users/91944/Music/Playlists/what makes.mp3");
    }
    else if (input == "i'm happy") {
        let t1="Listen to this->On The Floor-Jennifer Lopez"
       return t1.link("C:/Users/91944/Music/Playlists/on the floor.mp3");
    }
    else if (input == "i'm sad") {
        let t1="Listen to this->Ok Not To Be Okay-Demi Lovato"
       return t1.link("C:/Users/91944/Music/Playlists/its ok.mp3");
    }
    else if (input == "recommend any other song") {
        let t1="Listen to this->Perfect-Ed Sheeran"
       return t1.link("C:/Users/91944/Music/Playlists/perfect.mp3");
    }
    else if (input == "play me a song"){
        return "How you are feeling?"
    }
    else if (input == "i'm feeling lonely"){
        return "I’m so sorry to hear that you feel all alone. If it makes you feel better most of us feel that way at some point. Your desires, fears, and sorrows are universal. So is your loneliness. We all feel lost sometimes. I know how strong you are and I know you’ll overcome this challenge."
    }
       else if (input == "how to book a slot for membership?"){
            let t1="Well!That's pretty simple,just click the button at the top right corner "
           return t1;
    }
     else {
        return "Try asking something else!";
    }
}
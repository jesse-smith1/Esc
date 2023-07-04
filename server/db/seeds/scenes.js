/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('scenes').del()
  await knex('scenes').insert([
    {
      id: 1,
      level_id: 1,
      text: "5:48 PM: Hey, Cheers for sticking back to finish up the app deploy! Please dont forget to turn off the lights and close down before you lock up for the night. Also, the elevator repair guys will be in tomorrow instead- so just a reminder to be careful in the elevator! not that you'll have any trouble with that haha. But give me a shout if you get stuck. See you tomorrow for the teams meeting!",
      final: false,
      slack:
        "5:49 PM:  Not everyone is a guy, 'guys' is a gendered pronoun. We recommend an alternative like 'crew'. We appreciate your help in building an inclusive environment at Dev!",
    },
    {
      id: 2,
      level_id: 3,
      text: "6:23 PM: Me again, Just checking in that you, still in the building? I left my swipe card in the basement if you're still around maybe you could grab for me? Sorry should've mentioned before you turned all the lights off. Don't mind the javascript carnival gang, they get a little restless down there. But anyways let me know!",
      final: false,
      slack: "6:24 PM: Enjoy the little things in life.",
    },
    {
      id: 3,
      level_id: 4,
      text: "7:10 PM: Thanks so much for grabbing my swipecard! You really made quick work of handling the javascript carnival guys huh! Just a quick reminder that the whole building is locked so dont forget the building code.",
      final: false,
      slack: "7:11 PM: Spread love everywhere you go.",
    },
    {
      id: 4,
      level_id: 5,
      text: "7:17: oh, you made it out of the building? Well, thats great then! uhh... i suppose we'll see you tomorrow then.",
      final: false,
      slack: "7:18: 👍 I will remind #teams-meeting at 10:30AM tomorrow morning.",
    },
    {
      id: 5,
      level_id: 0,
      text: "7:47PM: ",Y̷̡̧̩̬̮͓̖̓̍̅̀̂͌̕͜͝O̷̬̩̖͖̤͙͑͗̊͘͠Ụ̷̡͚̮͍̖̯̯̃̓͐̓̋̔̈́͐͜ ̶͚̦̿͗̏͑͐̓̊́̓̇W̸̛̝͇̲̑̆̌̆̀̉͒̍̔̕͠͠͝Ẻ̷͕̖͓̟̥̹͖͖͇̟͒̍̕R̴̩̤̞͈̒̋̊́̑͋̏͗͐́E̴̢̛̺͍̫̝̩̅͠N̴̨̻̣̼̆͒͋Ţ̶̧̡̭̹̘̄͐̆̓ ̵̮̦̱͙̙̲̹͔̟̆̐̾͂̈̒̉͑́̏̕͠͝Ś̴̢͚̜͖͚̯̭̗̏͛͆͘͜Ú̵̯͍̥̻̤̤͙̟̥͒͗̈́̃̃͋̾̓̈́͠͝P̶̧͛̈̔͐͛̑̚̕P̴͓̦̖̘̙͇̭̝͇͚͛͋̔̅̿̏̽̿̊͑͜͝͝O̶̡͔̦̩͓̪̱̖͂̋̿̋̔̊̇͛̅͋̆͋̀̕S̸̢͕͙̻̠̖̙̼̗͉̏͜E̸̛̥̅̍̉̋̈͌͗̅̅̂͋͠D̶̡͓͚̟͍͒̈́̅͌̂̂̌̒͝ ̷̦̠̗͎̞͗T̵̙͎̃̏̃̂͂̓̈́͌̄͝͠O̷̢͆͐̊̓̑̀́͊͑̕ ̵̠̔Ȩ̷̙̳͖̟̠̾́̍̊̍̓̓̉́S̶̨̲̫̞̞̗̻͇͙̹̠̟͙̏̉̉͗̕͜C̶̡̛̩̦͔͈̱̮̺͗̀̃̔͒̇̃̅̾̒̔̕͜S̵̬̈́̈́̊͌̎̈͌͌͋P̶̤͙͎̮̯̠̬͎̈́̍͘É̴̢̬͙̑̉̆̾̽̍̕ ̵̧̛̗̘̣̣̰̀͋̔Y̴̢̨̨͍̫͚̺̲̲̮̲̺͇̓̃̄̿̉͛Ȍ̴̧͓̳̬̫̤͇͒Ų̶̪̺̤͍̹͎̼͊͑͌͋̓̾̐͜W̵̼̣̝̭̹̥̄̂̑̽Ŗ̸̧̜̥̯̣̘͙͗͝Ę̴̨̭̺͙̭͍͚̈́́̈́͐̎̐͗̋̽͊͐̽̕͘N̷̡͕̖̫͈̠̥̳̳͕̺̥̽̏̀̋͗̀̄̃̔́Ṭ̸̗͖͙̳̉́̐̀͂ ̶̡̧̱̗͙̼͓̦̯̥͙̼̋̾͊́͒͛́̔́̚͜S̸̯̳͉̭̪̫͇̝͂͌̑̈́͜U̴̧̢̼̟͓͔̣̬͍̻̮̱͋P̷̢̝̳̬͇̥̪̼̗̖̜̮͊̀̆̎͌̊̾͗͛̽P̴̩̈́̎̏́͋͗̄͜͜͝͝S̵̘̞͚̎͐Ǫ̶͙̐̕E̶̢͔͈̤̗̳̰͖͎̩̪̯̻̊͋͋̆͗̔ͅḐ̷̺̰͈̮͎͈̪͈̳͒̔̐̒͐̋̏̓͊̏͝ ̶̢̨̟̮̱̲̼̟̞̖͍̳̊̋͌̀̅͗͝ͅT̸̢̪͙͓͛͗̐̏̓͠Ó̷͉̠̉̓͗͆̋͌́͐̍͌̍̚ ̵̛̜̜́̅̇́̀͛̆̆̏̂̚͝Ę̵̡̛̫̤̤͈͇͓̇̇̌̀͐͑͂̽͆̚S̶̨͕̲͕̟͎̹̺̺̄̋̔͌͋͑̊͗̋̐̚͝C̴̯̰̮̺̝̫͖͖̞̪͇̋̇͗͘͘̕A̷̛̙͈̮͍̥͕͓͖̹̜͂̈̆̆̽̍̽̎̏͜ͅP̶̘̙̓̔̋̕͘È̶̫͆͂̕ ̷̨͙͇̲̹̻̺͋̀̏͝ͅY̵̱͇͙̹̱̋̄̇̒̈́̋̂̈́̚O̶̡̡̨̯̟͍͂̈́͛͂͂̇͂̇̓̄̂ ̸̙̎ͅW̷̩̘͍̼̺̙̙̌̀̂̆̒̇̂̈́̕͝͝ͅÈ̴̹̇͒͒̌͊̄̀̅̀̈͑R̶̹͉͈̋͆̈́̉́̓̐͗̎̚̕͜͝E̷̙̠̼̿Ṋ̵̨̺͉̭̱̙̠̭̪͙̦͍̊̈́̎̕̕̚̕Ṛ̵̡͇̗̤̞̟̞̠͍̫̭̯̎̌N̸̜͆͊̾̔͌͂̃̿̾̂̑͊̎͘S̵̨͍͚̱̖̗̦̘̩̎̇̈́̇̿̆́͂̿̾͛͜U̷̡̥͈̙̱̻̭͈͎͙̻̙͇̍̅͋͂̃̀̌̀̿̓̀̕̚̕P̸̨̨̛͓̘̰̻̫̗̽P̵̢̛̪̟̯͕̙͇̪̱̣̦̠̌̌̾̓̉̔̆͆Ś̵̬̣̺̻͍̰E̷̥̖͖͈̘̞͋̅͌̈́̒̆̀͑̆̀͛̚ ̵̛̠̙̪̫͎̼̗͈̆̀̾͆̒̈̑͗͠͝͠T̸̖͍̮̏̃͑͑̔̅͛̓͗̈́Ǫ̴̧̡̪͕͉̭͙̦̀͌̾̍̇̉̈́̅̌ ̷̳̗̲͓̍͒̓̍̓̿̚͝E̸͖͒͐̅̇̋͛̓̓S̵̨̖̘̪̝̲͛̈́͗C̴̨̧̤͍̰̟̲͕͔̙͍̊͊̓̒̂́̈́̀̓̍̅̒͑A̸̛̪̜̼̐̾̎̎̌̌̏̋͑͝P̶̛͇̮̮͚̻̌̋͑̈́̀Ë̶̛͈̠̲̩̘̞̬̱̪͔͙͇̊͆͆̓͌̽͗̔̊͘
      final: true,
      slack: "7:48: Spread love everywhere you go.",
    },
  ])
}

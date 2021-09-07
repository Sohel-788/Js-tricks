const friends=['tarek','anika','asif','rofik','biddyiut'];
function bestFriend(friends) {
    if (Array.isArray(friends)==false) {
        return 'please provide an array';
    }
    let bestBuddy=[0];
    for(const friend of friends){
        if (friend.length> bestBuddy.length) {
            bestBuddy=friend;
        }
    }
    return bestBuddy;
   
}
const buddy=bestFriend(friends);
console.log(buddy);
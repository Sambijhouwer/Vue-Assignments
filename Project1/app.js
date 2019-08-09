new Vue({
    el: '#app',
    data:{
        playerhealth: 0,
        Monsterhealth: 0,
        play: false,
        log: []

    },
    methods:{
        StartGame: function(){
            this.playerhealth = 100;
            this.Monsterhealth = 100;
            this.play = true;
            this.log = []
            return
        },
        Giveup: function(){
            this.play = false;
        },
        Attack: function(){
            damage = this.Damage(2, 9)
            this.Monsterhealth -= damage;
            if(this.Checkwin()){
                return
            }
            this.log.unshift('Player hits monster for ' + damage)
            this.Monsterattack();

        },
        SpecialAttack: function(){
            damage = this.Damage(7, 14)
            this.Monsterhealth -= damage
            if(this.Checkwin()){
                return
            }
            this.log.unshift('Player hits monster for '+damage)
            this.Monsterattack();
        },
        Heal: function(){
            if(this.playerhealth <= 90){
                this.playerhealth += 10;
                this.log.unshift('Player heals 10 healthpoints')
            } else{
                this.playerhealth = 100;
                this.log.unshift('Player is fully healed')
            }
            this.Monsterattack();

        },
        Damage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        Monsterattack: function(){
            damage = this.Damage(5,12)
            this.playerhealth -= damage
            if(this.Checkwin()){
                return
            }
            this.log.unshift('Monster hits player for '+damage)
        },
        Checkwin: function(){
            if(this.Monsterhealth <= 0){
                if(confirm('You win! New game?')){
                    this.StartGame();
                }
                else{
                    this.play = false;
                }
                return true
            }
            if(this.playerhealth <= 0){
                if(confirm('You lost :( New game? ')){
                    this.StartGame();
                }
                else{
                    this.play = false;
                }
                return true
            }
        }
    }
})
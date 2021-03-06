const DrawCard = require('../../drawcard.js');

class AkodoGunso extends DrawCard {
    setupCardAbilities() {
        this.reaction({
            title: 'Refill province faceup',
            when: {
                onCardEntersPlay: event => event.card === this && ['province 1', 'province 2', 'province 3', 'province 4'].includes(event.originalLocation)
            },
            handler: context => {
                this.game.addMessage('{0} uses {1}\'s ability to refill the province face up', this.controller, this);
                let province = this.controller.getSourceList(context.event.originalLocation);
                let card = province.find(card => card.isDynasty);
                card.facedown = false;
            }
        });
    }
}

AkodoGunso.id = 'akodo-gunso';

module.exports = AkodoGunso;

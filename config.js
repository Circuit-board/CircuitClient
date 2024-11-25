import { @Vigilant, @NumberProperty, @TextProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @DecimalSliderProperty, Color, @SelectorProperty } from "../Vigilance";

@Vigilant('CircuitClient', '§6Circuit Client', {
	getCategoryComparator: () => (a, b) => {
		const categories = ['§6General','§6Chat','§6Website'];
		return categories.indexOf(a.name) - categories.indexOf(b.name);
	}
})

class Settings {
	@SwitchProperty({
        name: '§6Toggle',
        description: 'Toggle Circuit Client!',
        category: 'General',
        subcategory: '§6Toggle',
    })                   
    enabled = true;
	@TextProperty({
		name: '§6Text',
		description: 'Enter the text to be sent in the box over here ->',
		category: 'Chat',
		subcategory: '§6Chat Simulater',
	})
	text = '';
	@ButtonProperty({
		name: '§6Send',
		description: 'Send Chat Message',
		category: 'Chat',
		subcategory: '§6Chat Simulater',
		placeholder: '§6Send',
	})
	click() {
		if(this.enabled) {
			ChatLib.chat(this.text);
		}
	};
	@ButtonProperty({
		name: '§6Website',
		description: 'Open this mods website!',
		category: 'Website',
		subcategory: '§6Website',
		placeholder: '§6Open!'
	})
	OpenWebsite() {
		java.awt.Desktop.getDesktop().browse(new java.net.URI("https://circuit-board.github.io/"));
	}
	constructor() {
		this.initialize(this);
	}
}

export default new Settings();

export class WordCounter {

	countWords(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
		return string.split(' ').length;
	}
	

}



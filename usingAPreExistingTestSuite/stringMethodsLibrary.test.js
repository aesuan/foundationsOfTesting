var expect = chai.expect;

describe('String methods library', function() {
  describe('charAt', function() {
    it('returns the character at the specified index', function() {
      expect(charAt('hello', 0)).to.equal('h');
      expect(charAt('world!', 3)).to.equal('l');
      expect(charAt('test', 3)).to.equal('t');
    });

    it('returns empty string when given an out-of-bounds index', function() {
      expect(charAt('hello', 10)).to.equal('');
      expect(charAt('world!', -1)).to.equal('');
      expect(charAt('test', 4)).to.equal('');
    });

    it('returns the appropriate result when given an index that can be converted to an integer', function() {
      expect(charAt('hello', '1')).to.equal('e');
      expect(charAt('test', '3')).to.equal('t');
      expect(charAt('world!', 3.5)).to.equal('l');
      expect(charAt('world!', true)).to.equal('o');
      expect(charAt('test', '100')).to.equal('');
    });

    it('returns the first character when given an index that can\'t be converted to a number', function() {
      expect(charAt('world!', undefined)).to.equal('w');
      expect(charAt('test', null)).to.equal('t');
      expect(charAt('test', 'length')).to.equal('t');
    });
  });

  describe('startsWith()', function() {
    it('should return true when the string starts with the given substring', function() {
      var result = startsWith('Why did the chicken cross the road?', 'Why');
      expect(result).to.be.true;
    });

    it('should return false when the string does not start with the given substring', function() {
      var result = startsWith('Why did the chicken cross the road?', 'How');
      expect(result).to.be.false;
    });

    it('should return true when the substring is an empty string', function() {
      var result = startsWith('Why did the chicken cross the road?', '');
      expect(result).to.be.true;
    });

    it('should be case sensitive', function() {
      var result = startsWith('Why did the chicken cross the road?', 'why');
      expect(result).to.be.false;
    });

    it('should coerce any non-string substring to a string', function() {
      expect(startsWith('undefined', undefined)).to.be.true;
      expect(startsWith('Anything else', undefined)).to.be.false;
      expect(startsWith('2334', 2)).to.be.true;
    });
  });

  describe('slice method', function() {

    it("returns a portion of the string", () => {
      expect(slice("hello world", 1, 5)).to.equal("ello");
      expect(slice("hello world!", 6, 11)).to.equal("world");
      expect(slice("testing", 4, 6)).to.equal("in");
    });

    it('returns an empty string if indexStart is greater than or equal to string length', function() {
      var str = 'I love cake and pizza';
      expect(slice(str, 21)).to.equal('');
      expect(slice(str, 100)).to.equal('');
    });

    it('counts the index from the end of the string if indexStart is negative', function() {
      var str = 'Knock, knock, Neo.';
      expect(slice(str, -4)).to.equal('Neo.');
      expect(slice(str, -10, -5)).to.equal('nock,');
    });

    it('treats undefined, and non-numeric indexStart as 0', function() {
      var str = 'Why do programmers prefer dark mode? Because light attracts bugs.';
      expect(slice(str, undefined)).to.equal(str);
      expect(slice(str, 'not a number')).to.equal(str);
    });

    it('extracts to the end of the string if indexEnd is omitted, undefined, or non-numeric', function() {
      var str = 'Why was the math book sad? Because it had too many problems.';
      expect(slice(str, 42, undefined)).to.equal('too many problems.');
      expect(slice(str, 27, 'not a number')).to.equal('Because it had too many problems.');
    });

    it('counts the index from the end of the string if indexEnd is negative', function() {
      var str = 'I used to be indecisive, but now I am not sure.';
      expect(str.slice(0, -5)).to.equal('I used to be indecisive, but now I am not ');
      expect(str.slice(-10, -5)).to.equal(' not ');
    });

    it('returns an empty string if indexEnd is less than or equal to indexStart after normalizing negative values', function() {
      var str = 'Why don\'t scientists trust atoms? Because they make up everything.';
      expect(str.slice(-10, -15)).to.equal('');
      expect(str.slice(10, 5)).to.equal('');
    });
  });

});
function generate() {
  var quotes = {
      "- Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
      "- Piencie Brown": '"Man cannot be freed by the same injustice that enslaved it."',
      "-C.S. Lewis":'"I was not born to be free---I was born to adore and obey."',
      "-..": '"The magic you are looking for is in the work you are avoding"',
      "-..":'"Believe you can and you are halfway there"',
      "-Jenny Valentine":'"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
      "- Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."'
  }
  
  var authors = Object.keys(quotes);
  var randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[randomAuthor];
  
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = randomAuthor;
}

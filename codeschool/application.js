// // jQuery Selector with the 'text' method to change the content of the elements selected

// $('li').text('Orlando')
// $('p').text('texto cambiado por jQuery')
// $('.promo').text('Miami')

// // But, 'text()' without argument 'returns' the text of the element selected:
// $('.promo').text() // Return now, 'Miami'

// // Descendant selector
// $('.destinations li')

// // Child selector
// $('.destinations > li')

// // Multiple Items selector ','
// $('.promo, #france')

// // Pseudo selector ':first'
// $('#destinations li:first')

// // Pseudo selector ':last'
// $('#destinations li:last')

// // Pseudo selector ':odd' - Impares (remember that elements begin in 0, not 1)
// $('#destinations li:odd')

// // Pseudo selector ':even' - Pares
// $('#destinations li:even')

// // Listening for document ready (3 alternatives):

// jQuery(document).ready(function ($) { // ALT 1

// })

// $(document).ready(function () { // ALT 2

// })

// $(function () { // ALT 3

// })

// // Filter by Traversing:

// $('.destinations').find('li') // More code, but is faster than: $('.destinations li')
// $('li').first() // ALT to $('li:first')
// $('li').last()

// // 'Walking the DOM technique': how to select the second element?
// $('li').first().next() // Method channing
// $('li').first().next().pev() // SAME result as: $('li').first()
// $('li').first().parent() // Return the parent (Traverse UP)
// $('li').first().children('li') // Return the 'li' children (Traverse DOWN)

// Appending the DOM:

// $('.vacation').before() : Puts the element node before '.vacation'
// $('.vacation').after() : Puts the element node after '.vacation'
// $('.vacation').prepend() : Puts the element node as te first child of '.vacation'
// $('.vacation').append() : Puts the element node at the bottom of '.vacation'

// Or you can do:

// var element01 = $('<p>#element01</p>')

// element01.appendTo('selector')
// element01.prependTo('selector')
// element01.insertAfter('<element>')
// element01.insertBefore('<element>')

$(function () {
  // $('button').on('click', function () {
  //   var price = $('<p>From $399.99</p>') // We create a DOM Node
  //   $('.vacation').append(price)
  //   $('button').remove() // Remove the element from the DOM
  // })

  // If we do it like the code before, each time we click one button 'every' button will change at the same time
  // with the same content. To avoid that, we must use 'this':
  // First we must know is that 'this' is not a jQuery object,
  // So it needs to be converted: $(this)

//   $('button').on('click', function () {
//     var price = $('<p>From $399.99</p>') // We create a  DOM Node
//     $(this).closest('.vacation').append(price) // Add the price element at the bottom of the closest .vacation element
//     $(this).remove() // Remove the button from the DOM that was clicked
//   })
// })

// But how to show different prices?? :

  // $('button').on('click', function () {
  //   var vacation = $(this).closest('.vacation') // We can save any element selection in a variable to make the code cleaner
  //   var amount = vacation.data('price') // Select the data-price value
  //   var price = $('<p>From $' + amount + '</p>')

  //   vacation.append(price)
  //   $(this).remove()
  // })

  $('.vacation').on('click', 'button', function () {  // Here we indicate that we want put a event on each button inside .vacation
                                                      // That is called 'event delegation'
    var vacation = $(this).closest('.vacation')
    var amount = vacation.data('price')
    var price = $('<p>From $' + amount + '</p>')

    vacation.append(price)
    $(this).remove()
  })

  // .addClass(<class>) Add a class
  // .removeClass(<class>) Remove a class

  $('#filters').on('click', '.onsale-filter', function (event) {
    event.preventDefault()
    $('highlighted').removeClass('highlighted')
    $('.vacation').filter('.onsale').addClass('highlighted')
  })

  // .slideDown() Show it
  // .slideUp() Hide it
  // .slideToggle() Toggle between hide and show
  // $('li').length // Return how many 'li' elements ar ein te document

  // $('.confirmation').on('click', 'button', function () {
  //   $(this).closest('.confirmation').find('.ticket').slideToggle()
  // })

  // // Hover event:
  // $('.confirmation').on('mouseenter', 'button', function () {
  //   $(this).closest('.confirmation').find('.ticket').slideToggle()
  // })

  // A better way to clean the code:

  function showTicket () {
    $(this).closest('.confirmation').find('.ticket').slideToggle()
  }

  $('.confirmation').on('click', 'button', showTicket)
  $('.confirmation').on('mouseenter', 'button', showTicket)

// KEYWORD events:

  $('.vacation').on('keyup', '.quantity', function (event) {
    event.preventDefault()
    var price = +$(this).closest('.vacation').data('price')
    var quantity = +$(this).val()
    $('#total').text(price * quantity)
  })

  $('.vacation').on('mouseover', '.quantity', function (event) {
    event.preventDefault()
    $(this).animate({'margin-left': '50px'}, 800)
  })

  // .css(<attr>) Get the current attr value
  // .css(<attr>, <value>) Set a new attr value
  // .css (<object>): Set it with a JS Object:

  // .css({'color': 'red',
  //       'font-size': '20px'})

  // We dont need to use css to show or hide with classes an element
  // We can use:

  // .show()
  // .hide()

  // $(this).find('li').show()
  // $(this).find('li').hide()

  // We can animate with jQuery:
  // $(this).animate({'top': '-10px'})
})


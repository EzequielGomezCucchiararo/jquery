// $('#f1-calculate').on('click', function () {
//   var f1a = $('#f1-a').val()
//   var f1b = $('#f1-b').val()
//   var $resultInput = $('#f1-result')
//   var result = f1a / 100 * f1b

//   $resultInput.val(result)
// })

// $('#f2-calculate').on('click', function () {
//   var f2a = $('#f2-a').val()
//   var f2b = $('#f2-b').val()
//   var $resultInput = $('#f2-result')
//   var result = f2a / f2b * 100

//   $resultInput.val(result)
// })

// $('#f3-calculate').on('click', function () {
//   var f3a = $('#f3-a').val()
//   var f3b = $('#f3-b').val()
//   var $resultInput = $('#f3-result')
//   var result = (f3b - f3a) / f3a * 100

//   $resultInput.val(result)
// })

function getResult (prefix, op1, op2) {
  switch (prefix) {
    case 'f1':
      return op1 / 100 * op2
    case 'f2':
      return op1 / op2 * 100
    case 'f3':
      return (op2 - op1) / op1 * 100
  }
}

$('section').on('click', 'button[id$=calculate]', function (e) {
  e.preventDefault()
  var pref = $(this).attr('id').substr(0, 2)
  var $resultInput = $('#' + pref + '-result')
  var op1 = $('#' + pref + '-a').val()
  var op2 = $('#' + pref + '-b').val()
  var result = getResult(pref, op1, op2)

  if (isNaN(result)) {
    $('#f1').addClass('has-error')
  } else {
    $resultInput.val(result.toFixed(2))
    $('#f1').removeClass('has-error')
  }
})


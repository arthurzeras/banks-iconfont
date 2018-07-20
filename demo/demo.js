'use strict'

var fonts = [
  {
    class: 'bif-bb',
    bank: 'Banco do Brasil'
  },
  {
    class: 'bif-bradesco',
    bank: 'Bradesco'
  },
  {
    class: 'bif-caixa',
    bank: 'Caixa'
  },
  {
    class: 'bif-itau',
    bank: 'Itaú'
  },
  {
    class: 'bif-santander',
    bank: 'Santander'
  },
  {
    class: 'bif-sicoob',
    bank: 'Sicoob'
  },
  {
    class: 'bif-hsbc',
    bank: 'HSBC'
  },
  {
    class: 'bif-nubank',
    bank: 'Nubank'
  }
]

var row = document.querySelector('#icons-row')

fonts.forEach(function(bank) {
  row.innerHTML += mountCard(bank)
})

function mountCard(obj) {
  var html = '<div class="col-4 mb-3"><div class="card text-center"><div class="card-body">'
  html += '<i class="' + obj.class + '" style="font-size: 25pt;"></i>'
  html += '<h5 class="card-title">'+ obj.bank +'</h5>'
  html += '<p class="card-text">.'+ obj.class +'</p>'
  html += '</div></div></div>'
  return html
}
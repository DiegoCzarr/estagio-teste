// Função para verificar se o número pertence à sequência de Fibonacci
function checkFibonacci() {
  const n = parseInt(document.getElementById('fibonacci-input').value, 10);
  const result = document.getElementById('fibonacci-result');
  let a = 0, b = 1;
  while (a < n) {
      [a, b] = [b, a + b];
  }
  result.textContent = a === n ? `O número ${n} pertence à sequência de Fibonacci.` : `O número ${n} NÃO pertence à sequência de Fibonacci.`;
}

// Função para contar a letra 'a' na string fornecida
function countLetterA() {
  const text = document.getElementById('text-input').value;
  const result = document.getElementById('letter-a-result');
  const count = (text.match(/a/gi) || []).length;
  result.textContent = `A letra 'a' aparece ${count} vez(es) na string.`;
}

// Função para calcular o valor da variável SOMA
function analyzeCode() {
  let indice = 12;
  let soma = 0;
  let k = 1;
  while (k < indice) {
      k += 1;
      soma += k;
  }
  document.getElementById('code-result').textContent = `O valor de SOMA é ${soma}.`;
}

// Função para calcular o próximo elemento das sequências
function calculateSequences() {
  // a) Sequência: 1, 3, 5, 7, ___
  const a = [1, 3, 5, 7];
  const nextA = a[a.length - 1] + 2;

  // b) Sequência: 2, 4, 8, 16, 32, 64, ____
  const b = [2, 4, 8, 16, 32, 64];
  const nextB = b[b.length - 1] * 2;

  // c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____
  const c = [0, 1, 4, 9, 16, 25, 36];
  const nextC = (Math.sqrt(c[c.length - 1]) + 1) ** 2;

  // d) Sequência: 4, 16, 36, 64, ____
  const d = [4, 16, 36, 64];
  const nextD = (Math.sqrt(d[d.length - 1]) + 2) ** 2;

  // e) Sequência: 1, 1, 2, 3, 5, 8, ____
  const e = [1, 1, 2, 3, 5, 8];
  const nextE = e[e.length - 1] + e[e.length - 2];

  // f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____
  const f = [2, 10, 12, 16, 17, 18, 19];
  const nextF = f[f.length - 1] + 1;

  document.getElementById('sequences-result').textContent =
      `a) Próximo elemento: ${nextA}\n` +
      `b) Próximo elemento: ${nextB}\n` +
      `c) Próximo elemento: ${nextC}\n` +
      `d) Próximo elemento: ${nextD}\n` +
      `e) Próximo elemento: ${nextE}\n` +
      `f) Próximo elemento: ${nextF}`;
}

// Chama a função de cálculo de sequências quando a página é carregada
calculateSequences();

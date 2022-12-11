The **Transformer** architecture is like an RNN without recurrence (i.e. still has weight sharing) that uses [[Attention]]. 

![](https://i.stack.imgur.com/eAKQu.png)

The input is $x_{source} \in \mathbb{Z}^{B \times L_{source}}$ (each integer is a word/token). 
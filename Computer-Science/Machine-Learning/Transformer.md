The **Transformer** architecture is like an RNN without recurrence (i.e. still has weight sharing) that uses [[Attention]]. 

![](https://i.stack.imgur.com/eAKQu.png)

The input is a sequence of tokens, represented as integers. We can run a batch of $B$ sequences of length $L_{source}$. The input is $x_{source} \in \mathbb{Z}^{B \times L_{source}}$ and $x_{target} \in \mathbb{Z}^{B \times L_{target}}$. Then, we embed $x_{source}$ into $X_{source} \in \RR^{B \times L_{source} \times D}$ and add positional embeddings.

# Attention

* Encoder Attention
* Decoder Attention
* Encoder-Decoder Attention
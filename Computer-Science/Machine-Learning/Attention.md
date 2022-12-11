**Attention** is a mechanism for

* soft approximate hashtable
* queryable softmax pooling

The table has key-value pairs. You can query the table with $\mathbf{q}$

$$
\mathsf{similarity} = \frac{\langle \mathbf{q}, \mathbf{k} \rangle}{\sqrt{d}}
$$

$$
\mathsf{Attention} = \operatorname{softmax}(\frac{QK^\mathsf{T}}{\sqrt{d}})V
$$

Self-attention
: Whatever process is generating queries is also populating the table with keys and values


Multihead attention is just like having multiple channels in a ConvNet.
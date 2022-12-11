**Attention** is a mechanism for

* soft approximate hashtable
* queryable softmax pooling

The table has key-value pairs. You can query the table with $\mathbf{q}$

$$
\mathsf{similarity} = \frac{\langle \mathbf{q}, \mathbf{k} \rangle}{\sqrt{d}}
$$

Self-attention
: Whatever process is generating queries is also populating the table with keys and values
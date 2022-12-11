**Attention** is a mechanism for a soft approximate hashtable via queryable softmax pooling. You can query the table of key-value pairs with $\mathbf{q}$

$$
\mathsf{similarity} = \frac{\langle \mathbf{q}, \mathbf{k} \rangle}{\sqrt{d}}
$$

$$
\mathsf{Attention} = \operatorname{softmax}\left(\frac{QK^\mathsf{T}}{\sqrt{d}}\right)V
$$

\begin{align\*}
Q &= X_{source}W_Q \\\\
K &= X_{source}W_K \\\\
V &= X_{source}W_V
\end{align\*}

where $\\{W_{\alpha}\\}_{\alpha \in \{ Q, K, V\}}$

Self-attention
: Whatever process is generating queries is also populating the table with keys and values


Multihead attention is just like having multiple channels in a ConvNet.
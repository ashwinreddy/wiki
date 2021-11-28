A **transformer** uses scaled dot-product attention. [@vaswani2017attention]

For a sequence of length $T$, the query matrix $Q \in \RR^{T \times d_k}$, $K \in \RR^{T \times d_k}$, $V \in \RR^{T \times d_v}$,

$$
\mathsf{Attention}(Q, K, V) \triangleq \operatorname{softmax}\left(\frac{QK^\mathsf{T}}{\sqrt{d_k}}\right)V
$$
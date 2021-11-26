A **transformer** uses scaled dot-product attention.


$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left(\frac{QK^\mathsf{T}}{\sqrt{d_k}}\right)V
$$
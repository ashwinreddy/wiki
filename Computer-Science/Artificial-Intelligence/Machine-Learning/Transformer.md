---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

The **transformer** architecture introduced in @vaswani2017attention. Think about it as either for encoding or decoding.

$$
\begin{bmatrix} \pmb{x}_1 \\\\ \vdots \\\\ \pmb{x}_T \end{bmatrix} \to \boxed{\text{transformer encoder}} \to \begin{bmatrix} \pmb{z}_1 \\\\ \vdots \\\\ \pmb{z}_T \end{bmatrix}
$$

Formally, handles sequence transduction using scaled dot-product [[attention]] without convolutions or recurrences. For a sequence of length $T$, the query matrix $Q \in \RR^{T \times d_k}$, $K \in \RR^{T \times d_k}$, $V \in \RR^{T \times d_v}$,

$$
\mathsf{Attention}(Q, K, V) \triangleq \operatorname{softmax}\left(\frac{QK^\mathsf{T}}{\sqrt{d_k}}\right)V
$$

---
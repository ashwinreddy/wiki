An $(r, s)$ **tensor** $T$ over a [[vector space]] $V$ is a [[multilinear map]]

\begin{equation}
T: \underbrace{V^\* \times \dots \times V^\*}\_{r \text{ copies}} \times \underbrace{V \times \dots \times V}_{s\text{ copies}} \to \mathbb{R}
\end{equation}

Clearly, the vector space $V$ itself is the special case of a $(0, 1)$ tensor and the [[dual space]] likewise for $(1,0)$. It  may not be obvious, but there is a corrsepondence between $(1,1)$ tensors and [[linear maps|linear map]].

If we wanted to write out the components of a tensor, we would have $(r+s)^{\dim V}$ components given by

$$
T^{i_1\dots i_r}_{j_1 \dots j_s} = T(\epsilon_{i_1}, \dots, \epsilon_{i_r}, \vec{e}_{j_1}, \dots, \vec{e}_{j_s})
$$

# Transformation

> A tensor is anything that transforms like a tensor

Which is to say, only through transformation tensors.
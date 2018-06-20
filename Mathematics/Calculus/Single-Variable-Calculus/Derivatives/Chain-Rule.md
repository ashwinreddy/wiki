
### General Form
Let $f(x)=(f_1 \circ f_2 \circ \dots \circ f_n)(x)$. For notational simplicity, define $f_{a\dots b}=f_a \circ f_{a+1}\circ \dots \circ f_{b-1} \circ f_b$. Then, the chain rule says
\begin{equation}
\mathcal{D}\, f_{1\dots n} = \prod_{k=1}^n \mathcal{D}\\{\,f_k \circ f_{(k+1)\dots n}\\}
\end{equation}
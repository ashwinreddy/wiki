The metric tensor is a function $g: V \times V \to \mathbb R$ that measures arclengths in a given coordinate system. The metric tensor actually readily encodes differential arc length at a point $x$:

\begin{equation}
(\mathrm{d}s)^2 = g_{ij}(x)\mathrm{d}x^i\mathrm{d}x^j
\end{equation}

We can see that this expression easily regresses to flat space if $g_{ij}=\delta_{ij}$

\begin{equation}
(\mathrm{d}s)^2 = (\mathrm{d}x)^2+(\mathrm{d}y)^2+(\mathrm{d}z)^2
\end{equation}

The generality of the metric tensor stems from cross terms that appear if the basis vectors are not orthogonal.

Properties:

- bilinear
- symmetric
- nondegenerate



$\let\sb_$

\begin{align}
L &= \int \,\mathrm{d}s \\\
&= \int \sqrt{g\sb{ij}\mathrm{d}x^i\mathrm{d}x^j} \\\
&= \int\limits_{t\sb{1}}^{t_2} \sqrt{g_{ij}\frac{\mathrm{d}x^i}{\mathrm{d}t}\frac{\mathrm{d}x^j}{\mathrm{d}t}}\,\mathrm{d}t
\end{align}


\begin{equation}
g = J^\mathsf{T}J
\end{equation}
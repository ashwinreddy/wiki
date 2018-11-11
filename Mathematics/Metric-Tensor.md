The metric tensor is a function $g: V \times V \to \mathbb R$ that measures arclengths in a given coordinate system. Perhaps the most straightforward to compute it is with the [[Jacobian]]



\begin{equation}
g = J^\mathsf{T}J
\end{equation}

The metric tensor actually readily encodes differential arc length at a point $x$:

\begin{equation}
(\mathrm{d}s)^2 = g_{ij}(x)\mathrm{d}x^i\mathrm{d}x^j
\end{equation}

We can see that this expression easily regresses to flat space if $g_{ij}=\delta_{ij}$

\begin{equation}
(\mathrm{d}s)^2 = (\mathrm{d}x)^2+(\mathrm{d}y)^2+(\mathrm{d}z)^2
\end{equation}

The generality of the metric tensor stems from cross terms that appear if the basis vectors are not orthogonal. Thus, the length of the curve in any coordinate system is given by


$\let\sb_$

\begin{align}
L &= \int \,\mathrm{d}s \\\
&= \int \sqrt{g\sb{ij}\mathrm{d}x^i\mathrm{d}x^j} \\\
&= \int\limits_{t\sb{1}}^{t_2} \sqrt{g_{ij}\frac{\mathrm{d}x^i}{\mathrm{d}t}\frac{\mathrm{d}x^j}{\mathrm{d}t}}\,\mathrm{d}t
\end{align}

# First Principles

The arclength interpretation is rather obvious if one considers $ds$:

\\[
ds = \vec{e}_a dx^a
\\]

Then,

\\[
ds^2 = \left(\vec{e}_a dx^a\right)\left(\vec{e}_b dx^b\right) = \vec{e}_a\vec{e}_b dx^adx^b = g_{ab}dx^adx^b
\\]

# Properties

- bilinear
- symmetric
- nondegenerate




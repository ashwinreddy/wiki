An **atlas** $\mathscr{A}$ collects [[charts|coordinate system]] into a complete map, known as an [[open cover]], for a [[manifold]]. When we're interested in a [[differentiable manifold]], we have to check the transition maps.


# Transition Maps

Transition maps are wrapped inside the abstraction of an atlas and hopefully do not become leaky. The idea is that you have two charts $U_i$ and $U_j$ that overlap somewhere (e.g. maybe helpful to think of a chart for two countries):

\begin{equation}
U_{ij} = U_i \cap U_j
\end{equation}

The transition map is a coordinate transformation from $U_i$ to $U_j$ and by the construction of a manifold is at least guaranteed to be continuous.

\begin{equation}
\RR^n \supset \phi_i^{-1}(U_{ij}) \xrightarrow{\phi_i} U_{ij} \xrightarrow{\phi_j^{-1}} \phi_j^{-1}(U_{ij}) \subset \RR^n
\end{equation}


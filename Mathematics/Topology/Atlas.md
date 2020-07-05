An **atlas** $\mathscr{A}$ collects [[charts|coordinate system]] into a complete map, known as an open cover, for a [[manifold]] $M$. 

\begin{equation}
\bigcup_{\alpha \in \mathcal{A}} U_\alpha = M.
\end{equation}

When we're interested in a [[differentiable manifold]], we have to check the transition maps. This seems to be mostly a technicality, but an example of a manifold that cannot be made smooth is one called E8.


# Transition Maps

The idea is that you have two charts $U_i$ and $U_j$ that overlap somewhere (e.g. it may be helpful to think of a chart for two countries): 

$$
U_{ij} = U_i \cap U_j
$$

The transition map is a coordinate transformation from $U_i$ to $U_j$ and by the construction of a manifold is at least guaranteed to be continuous.

\begin{equation}
\RR^n \supset \phi_i^{-1}(U_{ij}) \xrightarrow{\phi_i} U_{ij} \xrightarrow{\phi_j^{-1}} \phi_j^{-1}(U_{ij}) \subset \RR^n
\end{equation}

If you want a certain level of differentiability, you need to have the transition maps that support that.
An **atlas** collects [[charts|coordinate system]] into a complete map, known as an open cover, for a [[manifold]] $M$.

\begin{equation}
\mathscr{A} = \\{\left(U_\alpha, \varphi_\alpha \right) \mid \alpha \in A \\}
\end{equation}



\begin{equation}
\bigcup_{\alpha \in \mathcal{A}} \mathcal{U}_\alpha = M.
\end{equation}

When we're interested in a differentiable manifold, we have to check the transition maps. This seems to be mostly a technicality, but an example of a manifold that cannot be made smooth is one called E8.


# Transition Maps

The idea is that you have two charts $U_i$ and $U_j$ that overlap somewhere (e.g. it may be helpful to think of a chart for two countries): 

$$
U_{ij} = U_i \cap U_j
$$

The transition map is a coordinate transformation from $\mathcal{U}_i$ to $\mathcal{U}_j$ and by the construction of a manifold is at least guaranteed to be continuous.

\begin{equation}
\RR^n \supset \phi_i^{-1}(\mathcal{U}\_{ij}) \xrightarrow{\phi\_i} \mathcal{U}\_{ij} \xrightarrow{\phi_j^{-1}} \phi_j^{-1}(\mathcal{U}_{ij}) \subset \RR^n
\end{equation}

If you want a certain level of differentiability, you need to have the transition maps that support that.
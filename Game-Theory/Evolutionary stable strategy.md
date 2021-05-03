An **evolutionary stable strategy (ESS)** is a strategy $\mathbf{x} \in \Delta_n$ which beats a population that is made up of a small number of mutants (a population of $\epsilon \mathbf{z} + (1- \epsilon)\mathbf{x}$). Formally, for any mutant strategy 

a. $\mathbf{x}$ is a symmetric [[Nash equilibrium]]. Concretely, $$\mathbf{z}^\mathsf{T}A\mathbf{x} \leqslant \mathbf{x}^\mathsf{T}A\mathbf{x}$$ for all strategies $\mathbf{z}$ but it's sufficient to just check the pure ones.
b. If $\mathbf{z}$ is a pure strategy (alternatively, any strategy) $\mathbf{z} \neq \mathbf{x}$, then $$\mathbf{z}^\mathsf{T}Ax = \mathbf{x}^\mathsf{T}A\mathbf{x} \implies \mathbf{z}^\mathsf{T}A\mathbf{z} < \mathbf{x}^\mathsf{T}A\mathbf{z}$$

# Example

Rock, paper, scissors has a Nash equilibrium $\left(\frac{1}{3}, \frac{1}{3}, \frac{1}{3}\right)$ that is not an ESS because an invasion of a small population will cause a cycle of violence (increase in Rocks leads to increase in Paper, leads to increase in Scissors, ad infinitum).


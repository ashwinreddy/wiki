An **evolutionary stable strategy (ESS)** is a strategy which beats a population that is made up of a small number of mutants. Formally, it is a mixed strategy $\mathbf{x}$ if for any mutant strategy $\mathbf{z}$

a. $\mathbf{x}$ is a symmetric [[nash equilibrium]], i.e. $\mathbf{z}^\mathsf{T}A\mathbf{x} \leqslant \mathbf{x}^\mathsf{T}A\mathbf{x}$
b. If $\mathbf{z}^\mathsf{T}Ax = \mathbf{x}^\mathsf{T}A\mathbf{x}$, then $\mathbf{z}^\mathsf{T}A\mathbf{z} < \mathbf{x}^\mathsf{T}A\mathbf{z}$ 

where a mutant strategy means a population of $\epsilon \mathbf{z} + (1- \epsilon)\mathbf{x}$.
A **Lie algebra** over $k$ is a $k$-[[vector space]] $V$ along with a **Lie bracket**.

Lie bracket/commutator
: An operator $[\cdot,\cdot]: V \times V \to V$ satisfying the following for all $x, y, z \in V$:

* $[x, x] = 0$ for all $x \in V$
* \begin{equation}[x, [y, z]] + [y, [z,x]] + [z, [x,y]]=0 \tag{Jacobi identity}\end{equation}


Lie algebras on their own are not very interesting: a vector space can be furnished into a Lie algebra just by setting up the trivial bracket (i.e. $[x,x] = 0$). Instead, we're interested in Lie algebras that correspond to Lie groups.

Given a Lie group $G$, a useful Lie algebra for $G$ comes from equipping the [[tangent space]] $T_e G$ with the correct bracket.

# Homomorphism

A **Lie algebra homomorphism** is a linear map between Lie algebras that is compatible with the Lie bracket.


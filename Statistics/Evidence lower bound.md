**Evidence lower bound (ELBO)** is an objective that you can maximize if you want to minimize a [[KL divergence|Kullback-Leibler divergence]] between distribution $Q$ with a posterior $P(Z \mid X)$ for [[latent variable]] $Z$ and data $X$.

$$
{\displaystyle L(X)=H(Q;P(X,Z))-H(Q)=\sum _{\mathbf {Z} }Q(\mathbf {Z} )\log P(\mathbf {Z} ,\mathbf {X} )-\sum _{\mathbf {Z} }Q(\mathbf {Z} )\log Q(\mathbf {Z} )}
$$
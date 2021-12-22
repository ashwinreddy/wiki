The **evidence lower bound (ELBO)** is a lower bound on the probability of observing some data under a model. Therefore, one application in variational Bayes methods is that you can try to maximize the lower bound.


Let the latent variables be $Z$ and the data be $X$.

$$
{\displaystyle L(X)=H(Q;P(X,Z))-H(Q)=\sum_{\mathbf {Z} }Q(\mathbf {Z} )\log P(\mathbf {Z} ,\mathbf {X} )-\sum _{\mathbf {Z} }Q(\mathbf {Z} )\log Q(\mathbf {Z} )}
$$
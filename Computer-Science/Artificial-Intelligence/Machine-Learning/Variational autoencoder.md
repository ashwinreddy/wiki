---
bibliography: "Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

A **variational autoencoder (VAE)** [@kingma2013autoencoding] is an [[autoencoder]] whose latent space is a [[probability distribution]]. It outputs a vector of means and standard deviations for the decoder. This forces the decoder to treat the small space around the latent code as belonging to the same class. 

[[https://miro.medium.com/max/1400/1*96ho7qSyW0nKrLvSoZHOtA.png|align=center, height=200px]]

We also want to force the clusters to be near each other so that we can smoothly interpolate between classes.

[[https://miro.medium.com/max/1400/1*xCjoga9IPyNUSiz9E7ao7A.png|align=center, height=200px]]

# Problem Setting

We have a dataset $\pmb{X} = \left\\{\pmb{x}^{(i)} \right\\}_{i=1}^N$


---
A **mixture model**

# Gaussian Mixture Model

We can use a **Gaussian Mixture Model (GMM)** for [[clustering]]. Assume that each cluster is represented by a Gaussian. Each data point is assigned to a softmax distribution _over_ the Gaussian distributions. For zero-variance Gaussians, this is hard [[k-means clustering]]. This gives us, though, a generative model.
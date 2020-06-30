The **Fisher information** is a measurement for how much information a [[random variable]] $X$ carries about the parameter $\theta$ that generates it, how well you can estimate the parameter from the observations. 

$$
I(\theta) = \mathbb{E}_\theta \left[ -\frac{\partial^2 \ln P(\vec{x} \mid \theta )}{\partial \theta^2} \right]
$$

Formally, it is computed using the [[score]].

$$
\mathcal{I}_X(\theta) \triangleq \mathbb{E}_{p_\theta}[s(\theta)^2]
$$
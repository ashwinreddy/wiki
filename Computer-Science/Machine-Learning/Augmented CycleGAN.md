**[Augmented CycleGAN](https://arxiv.org/pdf/1802.10151.pdf)** is an extension to [[CycleGAN]] that can do many-to-many mappings for image-to-image translation by equipping a latent space to each side.

# Stochastic Mappings

However, if we simply slap on latent spaces and train using the CycleGAN approach, we'll find that the network will just ignore the latent space in order to keep to cycle consistency. In other words, we can't both have cycle consistency (which at least assumes a kind of injectivity, I think?) and many-to-many mappings.

# Formalism

There are four components:

|Type|Name|Space|
|---|------|----|
|Mapping|$G_{AB}$|$A \times Z_b \to B$|
|Mapping|$G_{BA}$|$B \times Z_a \to A$|
|Encoder|$E_A$|$A \times B \to Z_a$|
|Encoder|$E_B$|$A \times B \to Z_b$|

The idea is to learn a mapping $(a, z_b) \to (\tilde{b}, \tilde{z}_a)$. 
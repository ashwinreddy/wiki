**[Augmented CycleGAN](https://arxiv.org/pdf/1802.10151.pdf)** is an extension to [[CycleGAN]] that can do many-to-many mappings for image-to-image translation by equipping a latent space to each side.

# Formalism

There are four components:

|Type|Name|Space|
|Mapping|$G_{AB}$|$A \times Z_b \to B$|
|Mapping|$G_{BA}$|$B \times Z_a \to A$|
|Encoder|$E_A$|$A \times B \to Z_a$|
|Encoder|$E_B$|$A \times B \to Z_b$|
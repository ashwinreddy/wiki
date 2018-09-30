A **group** is a set $G$ with any operator $\diamond: G\times G \to G$ with the following properties:

Closure
  : $\forall a, b \in G : a \diamond b \in G$

Associativity
  : $\forall a, b, c \in G: (a \diamond b) \diamond c = a \diamond (b \diamond c) $

Identity
  : $\exists e \in G : \forall a \in G: e \diamond a = a \diamond e = a$
  
Invertibility
  : $\forall a \in G: \exists b \in G: a\diamond b = b \diamond a = e$
  
However, $a \diamond b = b \diamond a$ does not, in general, need to be true. If it is, the group is said to be **abelian** or **commutative**.
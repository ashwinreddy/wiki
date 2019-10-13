The **Enigma machine** was an encryption device used by Germans in World War 2. The machine consisted of a series of linked rotors. 

Every letter will map to a different letter.

# Interface

- Type a letter
- Rotors move
- Lampboard lights up for the ciphered letter

# Rotor

A rotor consists of a _alphabet tyre_ (letter ring), a ratchet wheel, and 26 contact points. A single rotor performs a substitution cipher based on the _Ringstellung_ (ring setting). A rotor also contains 1 or more notches. The ratchet can only be engaged by its pawl.

# Machine

The machine consists of $N$ rotors, which we'll number 1 to $N$, starting from the left. Rotor 1 is always a special kind of rotor called a reflector. The reflector is guaranteed not to turn because it does not have a pawl.

When connected in sequence, rotor $n$ typically prevents the $(n-1)$th rotor pawl from engaging its ratchet. The ratchet will only engage when the notch on the rotor to its right comes down to the appropriate location. However, rotor $N$ has no rotor on its right, so it is always uncovered.

When a letter key is pushed, all the rotors will attempt to turn. Of course, since the pawl is blocked for some of these rotors, not all will turn. We can, however, guarantee that the $N$th rotor will turn. Because the $N$th rotor turns on every keypress, it is called the fast rotor.

We can choose to have non-rotating rotors by not placing pawls on them.

## Double Stepping

When the $i$th rotor is able to engage through the notch in the $(i+1)$th rotor's alphabet tyre, both rotor $i$ and $i+1$ rotate. Note, however, that a rotor either rotates or doesn't at any given time (i.e it will never rotate twice).

# Signal

A signal starting from the rightmost rotor enters through one of the 26 possible contacts, flows through wires in the rotors, "bounces" off the reflector, and then comes back through the same rotors (in reverse) by a different route, always ending up being permuted to a letter position different from where it started; that is, the permutation was always a derangement.
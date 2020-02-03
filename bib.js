  function sin(x, Epsilon) {
    var x, s, s_alt, Epsilon, Betrag, i;
    Betrag = 9999.0; i = 1; s = 0;
    while (Betrag > Epsilon)  {
      s_alt = s;
      s = s + Potenz(-1, i + 1) * Potenz(x, 2 * i - 1)/fakultät(2 * i - 1);
      i++;
      Betrag = s - s_alt;
      if (Betrag < 0) {
        Betrag = -1.0 * Betrag;
      }
    }
    return s;
  }

  function cos(x, Epsilon) {
    return sin(x + Math.PI * 0.5, Epsilon);
  }

  function tan(x, Epsilon) {
    return sin(x, Epsilon)/cos(x, Epsilon);
  }

  function arcsin(x, Epsilon) {
    var s, s_alt, Betrag, i;
    Betrag = 9999.0; i = 3; s = x;
    if(x == 1) {
      s = Math.PI/2;
    } else if (x == -1) {
      s = Math.PI/2 * -1;
    } else {
      while (Betrag > Epsilon) {
        s_alt = s;
        s += produktUngerade(i)/produktGerade(i) * Potenz(x, i)/i;
        i += 2;
        Betrag = s - s_alt;
        if(Betrag < 0) {
          Betrag = -1.0 * Betrag;
        }
      }
    }
    return s;
  }

  function arccos(x, Epsilon) {
    return Math.PI/2 - arcsin(x, Epsilon);
  }

  function produktGerade(n) {
    var p = 1;
    for (var i = 2; i < n; i += 2) {
      p *= i;
    }
    return p;
  }

  function produktUngerade(n) {
    var p = 1;
    for (var i = 1; i < n; i += 2) {
      p *= i;
    }
    return p;
  }

  function squareroot(x) {
    var a, a_alt, Epsilon, Betrag;
    a=1.0;
    Betrag=9999.0;
    Epsilon = 1.0e-16;
    while(Betrag>Epsilon) {
      a_alt=a;
      a=0.5*(a+x/a);
      Betrag=a-a_alt;
      if(Betrag<0) {
        Betrag=-1.0*Betrag;
      }
    }
    return a;
  }

  function Potenz(b, e) {
    var p = 1;
    for (var i = 1; i <= e; i++) {
      p *= b;
    }
    return p;
  }

  function fakultät(x) {
    if (x <= 0) {
      return 1;
    } else {
      return x * fakultät(x - 1);
    }
  }

  function ln(x) {
    var s, s_alt, Betrag, i, x, Epsilon;
    Betrag = 9999.0; i = 1; s = 0; Epsilon = 1.0e-16;
    while (Betrag > Epsilon) {
      s_alt = s;
      s += 1/i * Potenz((x - 1)/(x +  1), i);
      i += 2;
      Betrag = s - s_alt;
      if (Betrag < 0) {
        Betrag = -1.0 * Betrag;
      }
    }
    s *= 2;
    return s;
  }

  function piSmall(x) {
    while(x > 2 * Math.PI) {
      x -= 2 * Math.PI;
    }
    return x;
  }

  function ggT(a, b) {
    var r =  a % b;
    while(r > 0) {
      a = b;
      b = r;
      r = a % b;
    }
    return b;
  }

  function ggTRe(a, b) {
    var r = a % b;
    if(r == 0) {
      return  b;
    } else {
      return ggTRe(b, r);
    }
  }

  function kgV(a, b) {
    var v = b;
    while(v % a != 0) {
      v += b;
    }
    return v;
  }

tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 300,
            value_area: 800
        },
        color: {
            value: "#a000f7",
            animation: {
                enable: true,
                speed: 50,
                sync: false
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "a000f7"
              },
        },
        polygon: {
            nb_sides: 5
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
        size: {
            value: 1,
            random: true,
            animation: {
                enable: true,
                speed: 40,
                minimumValue: 0.1,
                sync: false
            }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#a000f7",
            opacity: 1,
            width: 2
        },
        move: {
            enable: true,
            speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
        },
    },
    interactivity: {
        detectsOn: "Canvas",
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            }
        }
    },
    detectRetina: false,
});
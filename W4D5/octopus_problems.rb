# Big O-ctopus and Biggest Fish

def sluggish_octopus(fishes)
  sorted_fishes = fishes.dup
  sorted = false
  while !sorted
    sorted = true
    (0...fishes.length - 1).each do |i|
      p sorted_fishes[i].length
      p sorted_fishes[i + 1].length
      if sorted_fishes[i].length > sorted_fishes[i + 1].length
        #sorted_fishes[i], sorted_fishes[i + 1] = sorted_fishes[i] + sorted_fishes[i + 1]
        sorted = false
      end
    end
  end

  sorted_fishes
end

def dominant_octopus

end

def clever_octopus

end

# Dancing Octopus

def slow_dance(dir, arr)

end

def fast_dance(dir, data_structure)

end

if __FILE__ == $PROGRAM_NAME

  fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
  tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

  p sluggish_octopus(fish)
end

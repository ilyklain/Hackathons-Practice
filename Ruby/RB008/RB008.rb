=begin
  -------------------------------------
  ‣ Twitter (X) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  X (Twitter) identifies "Bot Waves" by analyzing rapid bursts of 
  mentions from new accounts directed at a single target. 

  » Problem:
  Write a Ruby script that detects potential "Engagement Attacks".

  The system should:
    - Process a list of Mention logs: { sender_id, target_id, account_age_days }
    - A target is under attack if it receives more than X mentions 
      from accounts younger than Y days.

  » Example:
    Mentions:
      { sender: "Bot1", target: "Elon", age: 2 }
      { sender: "Bot2", target: "Elon", age: 1 }
      { sender: "Real1", target: "Elon", age: 1000 }

    Thresholds: Max 1 mention from accounts < 5 days old.
    Result: Elon is under attack!

  » Objective:
  Use Ruby's clean hash and enumerable methods to aggregate and filter data.

  » Approach:
  - Filter mentions by account age.
  - Group and count mentions by target_id.
  - Filter targets that exceed the threshold.
=end

def detect_engagement_attacks(mentions, max_mentions, max_age_days)
  # Filter only mentions from young accounts
  young_account_mentions = mentions.select { |m| m[:age] < max_age_days }

  # Count mentions per target
  counts = young_account_mentions.each_with_object(Hash.new(0)) do |mention, hash|
    hash[mention[:target]] += 1
  end

  # Find targets that exceed the threshold
  attacks = counts.select { |_target, count| count > max_mentions }

  attacks.keys
end

# Example Usage
mentions_log = [
  { sender: "NewUser1", target: "TechNews", age: 2 },
  { sender: "NewUser2", target: "TechNews", age: 1 },
  { sender: "OldUser1", target: "TechNews", age: 500 },
  { sender: "NewUser3", target: "CelebrityA", age: 3 },
  { sender: "NewUser4", target: "TechNews", age: 0 }
]

puts "X Bot Wave Detector"
under_attack = detect_engagement_attacks(mentions_log, 2, 5)

if under_attack.empty?
  puts "No attacks detected."
else
  under_attack.each do |target|
    puts "Warning: [#{target}] is under bot attack."
  end
end

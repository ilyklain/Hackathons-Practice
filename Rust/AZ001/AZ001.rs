/*
  -------------------------------------
  ‣ Amazon Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  During Prime Day, Amazon's fulfillment centers process millions of items. 
  To reduce shipping costs and carbon footprint, the system must pack items into 
  standard shipping containers (bins) as efficiently as possible.

  » Problem:
  Write a function that takes a list of Item objects and a bin capacity.
  The system should:
    - Categorize items into "Priority" and "Standard"
    - Ensure all "Priority" items are packed first
    - Use an approximation algorithm (First Fit Decreasing) to minimize the number of bins used
    - Return the total number of bins and the items in each bin

  » Example:
    Items:
      { id: "ITEM_001", weight: 4.5, is_priority: false }
      { id: "ITEM_002", weight: 2.0, is_priority: true }

    Capacity: 10.0

  » Objective:
  Build an efficient bin-packing logic that respects shipping priorities and optimizes space.

  » Approach:
  - Separate items into Priority and Standard lists
  - Sort items by weight in descending order (First Fit Decreasing)
  - Place each item in the first bin where it fits
  - Instantiate new bins only when necessary
*/

#[derive(Debug, Clone)]
struct Item {
    id: String,
    weight: f64,
    is_priority: bool,
}

#[derive(Debug)]
struct Bin {
    max_capacity: f64,
    current_weight: f64,
    items: Vec<Item>,
}

impl Bin {
    fn new(capacity: f64) -> Self {
        Bin {
            max_capacity: capacity,
            current_weight: 0.0,
            items: Vec::new(),
        }
    }

    fn can_fit(&self, weight: f64) -> bool {
        self.current_weight + weight <= self.max_capacity
    }

    fn add_item(&mut self, item: Item) {
        self.current_weight += item.weight;
        self.items.push(item);
    }
}

fn pack_items(items: Vec<Item>, bin_capacity: f64) -> Vec<Bin> {
    let mut bins: Vec<Bin> = Vec::new();

    // Separate and sort items: Priority items first, then by weight descending
    let mut sorted_items = items;
    sorted_items.sort_by(|a, b| {
        if a.is_priority != b.is_priority {
            b.is_priority.cmp(&a.is_priority) // true (priority) comes first
        } else {
            b.weight.partial_cmp(&a.weight).unwrap() // then descending weight
        }
    });

    for item in sorted_items {
        let mut placed = false;
        
        // Try to fit in existing bins (First Fit approach)
        for bin in bins.iter_mut() {
            if bin.can_fit(item.weight) {
                bin.add_item(item.clone());
                placed = true;
                break;
            }
        }

        // If no bin can fit the item, create a new one
        if !placed {
            let mut new_bin = Bin::new(bin_capacity);
            new_bin.add_item(item);
            bins.push(new_bin);
        }
    }

    bins
}

fn main() {
    let bin_capacity = 10.0;
    let inventory = vec![
        Item { id: "ITEM_001".to_string(), weight: 4.5, is_priority: false },
        Item { id: "ITEM_002".to_string(), weight: 2.0, is_priority: true },
        Item { id: "ITEM_003".to_string(), weight: 8.0, is_priority: false },
        Item { id: "ITEM_004".to_string(), weight: 5.5, is_priority: true },
        Item { id: "ITEM_005".to_string(), weight: 3.0, is_priority: false },
        Item { id: "ITEM_006".to_string(), weight: 1.5, is_priority: true },
    ];

    println!("--- Amazon Bin Packing System ---");
    println!("Bin Capacity: {}kg", bin_capacity);
    println!("Packing {} items...\n", inventory.len());

    let result = pack_items(inventory, bin_capacity);

    for (i, bin) in result.iter().enumerate() {
        println!("Bin #{} (Weight: {:.2}/{}):", i + 1, bin.current_weight, bin.max_capacity);
        for item in &bin.items {
            let priority_tag = if item.is_priority { "[PRIORITY]" } else { "[STANDARD]" };
            println!("  - {} ID: {}, Weight: {}kg", priority_tag, item.id, item.weight);
        }
        println!();
    }

    println!("Total Bins Used: {}", result.len());
}
